import './Button.css'

function Button(props) {
  //console.log('Button ', props)
  function secClass() {
    if (props.text === '0') {
      return 'button button__big'
    } else {
      return 'button '+props.secondClass
    }
  }

  return (
    <>
      <section
        className="button"
        className={secClass()}
        onClick={(e) => {props.onClick(props)}}
      >
        <p
          className={props.thirdClass}
        >
          {props.text}
        </p>
      </section>
    </>
  )
}

export default Button
/*
return (
  <>
    <section
      className="button"
      className={secClass()}
    >
      <p
        className={props.pClass}
      >
        {props.text}
      </p>
    </section>
  </>
)
*/
