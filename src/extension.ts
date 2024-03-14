import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "gedcom" is now active!');

  let disposable = vscode.languages.registerDocumentFormattingEditProvider("gedcom", {
    provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.ProviderResult<vscode.TextEdit[]> {
      const textEdits: vscode.TextEdit[] = [];
      for (let index: number = 0; index < document.lineCount; index++) {
        const eachLine: vscode.TextLine = document.lineAt(index);
        const indent = parseInt(eachLine.text.split(' ')[0]);
        textEdits.push(new vscode.TextEdit(eachLine.range, "  ".repeat(indent) + eachLine.text.trimStart()));
      }
      return textEdits;
    },
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
