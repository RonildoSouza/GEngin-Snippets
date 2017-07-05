// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var hover = require('./hover');
var completion = require('./completion');
var signature = require('./signature');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "g-engin" is now active!');

    context.subscriptions.push(hover);
    context.subscriptions.push(completion);
    context.subscriptions.push(signature);

    // context.subscriptions.push(languages.setLanguageConfiguration(
    //     'autoit', { wordPattern: /([^`~!#\%\^\&*()-\=+[{\]}\|\;\:\'\"\,.\<>\/\?\s][A-z0-9]+)/ }));
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;