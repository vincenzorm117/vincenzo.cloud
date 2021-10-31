import cn from "classnames";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";

const SectionRepos = ({}) => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/vincenzorm117/repos")
      .then((r) => r.json())
      .then((reposResponse) => {
        for (let repo of reposResponse) {
          repo.pushed_at = new Date(repo.pushed_at);
        }
        reposResponse.sort((repoA, repoB) => repoB.pushed_at - repoA.pushed_at);
        setRepos(reposResponse);
      });
  }, []);

  if (repos === null) {
    return null;
  }

  return (
    <section>
      <h2 className="text-cyan-dark text-6xl text-center pt-20">Repos</h2>
      <ul className="max-w-4xl mx-auto my-20 rounded-lg bg-gray-light">
        {repos.map((repo, index) => (
          <li
            key={repo.id}
            className={cn(
              "py-5 px-10 border-gray-e2 border-solid",
              index !== 0 && "border-t-[1px]"
            )}
          >
            <a href={repo.html_url} target="_blank">
              <h6 className="text-black-chrome uppercase text-[22px] leading-tight font-semibold overflow-hidden text-overflow tracking-wider">
                {repo.name}
              </h6>
              {!isEmpty(repo.description) && (
                <p className="text-md text-gray-a3">{repo.description}</p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SectionRepos;
