export default function SelectorPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8'>
      <h1 className='text-4xl font-extrabold mb-6' data-testid='header'>
        Welcome to Our App
      </h1>
      <input
        type='text'
        id='user-input'
        placeholder='Type something...'
        className='border border-white bg-transparent text-white p-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white w-80 text-center'
      />
      <button
        className='bg-white text-blue-600 font-semibold py-2 px-6 mt-4 rounded-lg shadow-md hover:bg-gray-200 transition'
        data-test='submit-btn'>
        Submit
      </button>
      <p className='mt-6 text-lg font-medium' role='status' id='output'>
        Output will be shown here.
      </p>
    </div>
  );
}
