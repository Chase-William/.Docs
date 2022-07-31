const USER_ERROR = "1";
const INTERNAL_ERROR = "2";

export function handleError(errorBuffer: Buffer) {

  const str = errorBuffer.toString('utf-8')
  
  const codeToMessageIndex = str.indexOf(" ")
  const message = str.substring(codeToMessageIndex + 1)
  switch (str.slice(0, codeToMessageIndex)) {
    case USER_ERROR:
      console.log(message)
      break;
    case INTERNAL_ERROR:
      console.log(message)
      break;
    default:
      console.log("DEFAULT BREAK HIT IN ERROR HANDLING -- SOMETHING IS SERIOUSLY WRONG HERE...")
      console.log(message)
      break;
  }

  // const errors = new TypedJSON(ErrorRoot).parse(errorBuffer.toString())
  // console.log(errors)
}
