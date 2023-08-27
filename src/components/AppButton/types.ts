export interface Props {
    content?: string
    type?: Type
    size?: Size
    circle?: boolean
    square?: boolean
    disabled?: boolean
}

type Type = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info'

type Size = 'small' | 'medium' | 'large'
