export class Task {
  private Id: string
  private Description: string
  private Done: boolean
  private UserId: string
  
  constructor(description: string, done: boolean, userId: string, id?: string) {
    if (!this.isDescritionValid(description)) {
      throw new Error("INVALID_TASK_DESCRIPTION");
    }
    if (!this.isDoneValid(done)) {
      throw new Error("INVALID_TASK_DONE");
    }
    if (!this.isUserIdValid(userId)) {
      throw new Error("INVALID_TASK_USERID");
      
    }
    if (id && !this.isIdValid(id)) {
      throw new Error("INVALID_TASK_ID");
    }

    this.Description = description
    this.Done = done
    this.UserId = userId
    this.Id = id
  }

  get description() {
    return this.Description
  }
  get done() {
    return this.Done
  }

  get userId() {
    return this.UserId
  }

  get id() {
    return this.Id
  }

  private isIdValid (id: string) {
    return typeof id === 'string'
  }
  private isUserIdValid (userId: string) {
    return typeof userId === 'string'
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