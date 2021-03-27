module.exports = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    testMatch: ['**/tests/**/*.test.(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
