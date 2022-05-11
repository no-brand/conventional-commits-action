const core = require('@actions/core');
const github = require('@actions/github');

try {
    const version = core.getInput('conventional-commits-version');
    console.log(`conventional commits ${version}`);
} catch (error) {
    core.setFailed(error.message);
}
