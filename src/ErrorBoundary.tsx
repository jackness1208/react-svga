import React from 'react'
export interface ErrorBoundaryProps {
  onError?: (error: Error) => void
}
export interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    const { onError } = this.props
    this.setState({
      hasError: true
    })
    if (onError) {
      onError(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return <></>
    }
    return this.props.children
  }
}
