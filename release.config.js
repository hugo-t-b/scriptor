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
            release: "patch"
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
