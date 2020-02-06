const CFError = require('cf-errors');
const yargs = require('yargs');
const _ = require('lodash');
const Command = require('../../Command');


const compose = new Command({
    root: true,
    command: 'compose',
    usage: 'Supported resources:',
    description: 'Compose to create one Codefresh resource',
    webDocs: {
        description: 'Compose to create one Codefresh resource',
        category: 'Compose',
        title: 'Compose',
        weight: 10,
    },
    builder: _.identity,
    handler: async (argv) => {
        if (!argv.filename) {
            yargs.showHelp();
            return;
        }
        const data = argv.filename;
        const entity = data.kind;

        switch (entity) {
            default:
                throw new CFError(`Entity: ${entity} not supported`);
        }
    },
});

module.exports = compose;