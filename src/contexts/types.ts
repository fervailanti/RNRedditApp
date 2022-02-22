type ActionMap<T extends { [index: string]: any }> = {
  [Key in keyof T]: T[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: T[Key]
      }
}

export type Action<T = any> = ActionMap<T>[keyof ActionMap<T>]
