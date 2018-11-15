import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary', error, info)
    }

    render() {
        if (this.state.hasError) {
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