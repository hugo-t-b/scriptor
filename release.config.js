/**
 * @type {import("semantic-release").GlobalConfig}
 */
export default {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          {
            type: "docs",
            scope: "readme",
            release: "patch"
          },
          {
            type: "docs",
            scope: "license",
            release: "path"
          }
        ]
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

  parserOpts: {
    headerPattern: /^(?:.+ )?(\w*)(?:\(([\w\$\.\-\* ]*)\))?\: (.*)$/
  }
};
