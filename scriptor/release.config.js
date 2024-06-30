/**
 * @type {import("semantic-release").GlobalConfig}
 */
export default {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts: {
          headerPattern: "/^[. ]?(\w*)(?:\(([\w\$\.\-\* ]*)\))?\: (.*)$/"
        }
      }
    ],

    "@semantic-release/release-notes-generator",

    [
      "@semantic-release/npm",
      {
        npmPublish: false
      }
    ],

    "@sebbo2002/semantic-release-jsr",
    "@semantic-release/github"
  ],
  
  preset: "conventionalcommits"
};
