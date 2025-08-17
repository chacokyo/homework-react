export const BASE_STYLE =
  'inline-flex gap-2 items-center justify-center font-medium ' +
  'transition-colors duration-200 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed'

export const VARIANTS = {
  PRIMARY: 'bg-gray-200 text-black hover:bg-gray-300',
  SECONDARY: 'bg-yellow-300 text-blue-700 hover:bg-yellow-400',
  DANGER: 'bg-red-500 text-white hover:bg-red-600',
  OUTLINE: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
  GHOST: 'bg-transparent text-gray-700 hover:bg-gray-200',
}

export const SIZES = {
  SMALL: 'px-2 py-1 text-sm rounded',
  MEDIUM: 'px-4 py-2 text-base rounded-md',
  LARGE: 'px-6 py-3 text-lg rounded-lg',
}
