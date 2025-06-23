type ShellCommand = (args: string[], shell: Shell) => Promise<void> | void;

export class Shell {
  private commands: Map<string, ShellCommand> = new Map();
  private outputHandler: ((msg: string) => void) | null = null;
  private promptStr = '$ ';

  setOutputHandler(handler: (msg: string) => void) {
    this.outputHandler = handler;
  }

  setPrompt(prompt: string) {
    this.promptStr = prompt;
  }

  print(msg: string) {
    if (this.outputHandler) this.outputHandler(msg);
  }

  prompt() {
    this.print(this.promptStr);
  }

  registerCommand(name: string, fn: ShellCommand) {
    this.commands.set(name, fn);
  }

  async runLine(line: string) {
    const [cmd, ...args] = line.trim().split(/\s+/);
    if (!cmd) {
      this.prompt();
      return;
    }
    const command = this.commands.get(cmd);
    if (!command) {
      this.print(`Command not found: ${cmd}`);
      this.prompt();
      return;
    }
    try {
      await command(args, this);
    } catch (e: any) {
      this.print(`Error: ${e.message}`);
    }
    this.prompt();
  }
}

export const shell = new Shell(); 