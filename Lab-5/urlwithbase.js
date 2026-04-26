const baseURL = 'https://www.example.com:7000'

const url = new URL('/path/to/page',baseURL)

url.searchParams.append('name','ronit')
url.searchParams.append('age','19')
url.searchParams.append('city','jamnagar')