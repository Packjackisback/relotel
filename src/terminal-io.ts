export interface TerminalIO {
  print(msg: string): void;
  prompt(promptStr: string): void;
  onInput(handler: (line: string) => void): void;
}

export class BasicTerminalIO implements TerminalIO {
  private inputHandler: ((line: string) => void) | null = null;
  private buffer: string[] = [];

  print(msg: string) {
    // For testing, just push to buffer
    this.buffer.push(msg);
  }

  prompt(promptStr: string) {
    this.print(promptStr);
  }

  onInput(handler: (line: string) => void) {
    this.inputHandler = handler;
  }

  // For testing: simulate user input
  simulateInput(line: string) {
    if (this.inputHandler) this.inputHandler(line);
  }

  // For testing: get all output
  getOutput(): string[] {
    return this.buffer;
  }
} 