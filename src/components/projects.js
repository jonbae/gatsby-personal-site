import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RepoCard from "./repoCard"
import useThemeContext from "../hooks/themeContext"

function Projects() {
  const { style } = useThemeContext()
  // const { github: { viewer: { repositories } } } = useStaticQuery(
  //   graphql`
  //     query {
  //       github {
  //         viewer {
  //           repositories(privacy: PUBLIC, affiliations: OWNER, first: 9, orderBy: {field: CREATED_AT, direction: DESC}) {
  //             nodes {
  //               owner {
  //                 login
  //               }
  //               name
  //               url
  //               description
  //               stargazers {
  //                 totalCount
  //               }
  //               forkCount
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  const {
    github: {
      viewer: { repositories, GQL_store, clone, viz },
    },
  } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            GQL_store: repository(name: "express-react-graphql-online-store") {
              name
              url
              description
              stargazers {
                totalCount
              }
              owner {
                login
              }
            }
            clone: repository(name: "SheikahNote") {
              name
              url
              description
              stargazers {
                totalCount
              }
              owner {
                login
              }
            }
            viz: repository(name: "GitCommitment") {
              name
              url
              description
              stargazers {
                totalCount
              }
              owner {
                login
              }
            }
            repositories(
              privacy: PUBLIC
              affiliations: OWNER
              first: 9
              orderBy: { field: CREATED_AT, direction: DESC }
            ) {
              nodes {
                owner {
                  login
                }
                name
                url
                description
                stargazers {
                  totalCount
                }
                forkCount
              }
            }
          }
        }
      }
    `
  )
  const selectedRepo = [GQL_store, clone, viz]
  return (
    <>
      <h2 className={style === "dark" ? "text-white" : ""}>My Projects</h2>
      <p className={`f4 mb-4 ${style === "dark" ? "text-white" : "text-gray"}`}>
        GitHub repositories that I've built.
      </p>
      <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
        {selectedRepo.map((repository, i) => (
          <div key={i} className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
            <RepoCard repository={repository} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
