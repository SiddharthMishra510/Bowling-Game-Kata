module.exports = {
    preset: 'ts-jest',  // This tells Jest to use ts-jest for TypeScript files
    testEnvironment: 'node',  // Specifies the environment in which the tests will run (use "node" for backend apps)
    transform: {
        '^.+\\.tsx?$': 'ts-jest',  // Transform .ts and .tsx files using ts-jest
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],  // Recognize .ts, .tsx, and .js extensions
};
