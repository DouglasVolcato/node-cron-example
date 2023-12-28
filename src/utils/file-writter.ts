import { appendFileSync } from "fs";

export class FileWritter {
  public writeInFile(filePath: string, content: string): void {
    return appendFileSync(filePath, content);
  }
}
