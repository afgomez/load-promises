export default {
  input: 'src/loadPromises.js',
  output: [
    {
      file: 'dist/loadPromises.umd.js',
      name: 'loadPromises',
      format: 'umd'
    },
    {
      file: 'dist/loadPromises.es.js',
      format: 'es'
    }
  ]
};
