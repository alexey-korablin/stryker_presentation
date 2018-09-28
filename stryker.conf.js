module.exports = function (config) {
    config.set({
        files: [
            'scripts/**/*.js',
            'test/**/*.spec.js',
            'karma.conf.js'
        ],
        mutate: ['scripts/**/*.js'],
        testFramework: 'jasmine',
        testRunner: 'karma',
        reporters: ['progress', 'clear-text', 'html'],
        coverageAnalysis: 'off',
        karmaConfigFile: 'karma.conf.js',
        mutator: 'javascript',
        logLevel: 'trace'
    })
};

// coverageAnalysis: 'off' - it's little bit strange option. I wanted to use option perTest, but i can't (+ / требуется дополнительная конфигурация джасмин)
/*
Details' here:
"FATAL ConfigValidator Configured coverage analysis "perTest" requires there to be a testFramework configured. Either configure a testFramework or set coverageAnalysis to "all" or "off".
Stryker could not recover from this configuration error, see fatal log message(s) above."
*/

// Если запустить страйкер с конфигом из документации, то возникнет следующая ошибка:
/*
StrykerCli an error occurred { Error: Cannot determine input files. Either specify a `files` array in your stryker configuration, or make sure "D:\loki\other_projects\stryker_presentation" is located
inside a git repository. Inner error: Error: Command failed: git ls-files --others --exclude-standard --cached
--exclude .stryker-tmp
fatal: Not a git repository (or any of the parent directories): .git
*/
// то есть я должен еще и предусмотреть опцию 'files' в своем конфиге. (+)

// Забыл о плагинах таких как stryker-jasmine stryker-babel-transpiler stryker-html-reporter stryker-javascript-mutator stryker-karma-runner (+)

//После установки необходимых модулей запустил страйкер по новой. В процессе выполнения получил ошибку:
/*
ERROR [launcher]: Cannot load browser "PhantomJS": it is not registered! Perhaps you are missing some plugin?
*/
// Проблема в том, что страйкер ничего не знает о карма-конфиге. Как его указать? Да ктож его знает...

//Указал путь до файла с конфигом, но проблема не исчезла, страйкер попрежнему генерирует дефолтный конфиг и пытается запустить фантом

//Добавил путь до файла с карма-конфигом: karmaConfigFile: 'karma.conf.js'. Новая ошибка связана с отсутствием мутатора. устанавливаю stryker-javascript-mutator и добавляю его в конфиг: mutator: 'javascript' (в документации есть)

