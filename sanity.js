import PicoSanity from 'picosanity'

const client = new PicoSanity({
  projectId: 'nipfx4rq',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-04-11',
})

export default client
