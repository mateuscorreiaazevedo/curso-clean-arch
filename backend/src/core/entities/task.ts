export class Task {
  private Id: string
  private Description: string
  private Done: boolean
  
  constructor(description: string, done: boolean, id?: string) {
    if (!this.isDescritionValid(description)) {
      throw new Error("INVALID_TASK_DESCRIPTION");
    }
    if(!this.isDoneValid(done)) {
      throw new Error("INVALID_TASK_DONE");
    }
    if(id && !this.isIdValid(id)) {
      throw new Error("INVALID_TASK_ID");
    }

    this.Description = description
    this.Done = done
    this.Id = id
  }

  get description() {
    return this.Description
  }
  get done() {
    return this.Done
  }

  get id() {
    return this.Id
  }

  private isIdValid (id: string) {
    return typeof id === 'string'
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