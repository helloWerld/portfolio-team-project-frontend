import ScrollDownArrow from "../components/ScrollDownArrow"

const heroWrapper = (WrappedComponent, arrow) => {
  return function HOC(props) {
      return (
        <div className={` flex w-full min-h-screen bg-gradient-to-tr from-indigo-600 via-purple-600 to-rose-600 relative`}>
          {arrow && <ScrollDownArrow />}
          <div className="w-full h-screen px-12 md:px-32 2xl:px-48 bg-black/75">
            <WrappedComponent {...props} />
          </div>
        </div>
      )
  }
}

export default heroWrapper