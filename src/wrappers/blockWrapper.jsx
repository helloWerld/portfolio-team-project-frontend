import ScrollDownArrow from "../components/ScrollDownArrow"

const blockWrapper = (WrappedComponent) => {
  return function HOC(props) {
      return (
        <div className={`flex w-full min-h-screen max-h-min bg-gradient-to-bl from-indigo-600 via-purple-600 to-rose-600 relative`}>
          <ScrollDownArrow arrow />
          <div className="w-full min-h-screen max-h-min px-12 md:px-32 2xl:px-48 bg-black/80">
            <WrappedComponent {...props} />
          </div>
        </div>
      )
  }
}

export default blockWrapper