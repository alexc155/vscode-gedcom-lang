"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "gedcom" is now active!');
    let disposable = vscode.languages.registerDocumentFormattingEditProvider("gedcom", {
        provideDocumentFormattingEdits(document) {
            const textEdits = [];
            for (let index = 0; index < document.lineCount; index++) {
                const eachLine = document.lineAt(index);
                const indent = parseInt(eachLine.text.split(' ')[0]);
                textEdits.push(new vscode.TextEdit(eachLine.range, "  ".repeat(indent) + eachLine.text.trimStart()));
            }
            return textEdits;
        },
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map