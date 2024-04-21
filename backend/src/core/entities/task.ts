export class Task {
  private Description: string
  private Done: boolean
  
  constructor(description: string, done: boolean) {
    if (!this.isDescritionValid(description)) {
      throw new Error("INVALID_TASK_DESCRIPTION");
    }
    if(!this.isDoneValid(done)) {
      throw new Error("INVALID_TASK_DONE");
    }

    this.Description = description
    this.Done = done
  }

  get description() {
    return this.Description
  }
  get done() {
    return this.Done
  }
  
  private isDescritionValid (description: string): boolean {
    return typeof description === 'string' &&
    description.length > 6 &&
    description.length < 100 
  }

  private isDoneValid (done: boolean): boolean {
    return typeof done === 'boolean'
  }
}