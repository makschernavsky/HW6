import Loader from "../Loader/Loader"

const withLoader = (WrappedComponent) => ({loading, ...rest}) => {
        if(loading) return <Loader />

        return <WrappedComponent {...rest} />
}

export default withLoader