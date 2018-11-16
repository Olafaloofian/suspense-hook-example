import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary', error, info)
        this.setState({error: error, errorInfo: info})
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <>
                    <h1>An error occurred.</h1>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary