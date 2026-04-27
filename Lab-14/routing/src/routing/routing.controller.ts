/* eslint-disable prettier/prettier */
import { All, Controller, Get, Header, HttpCode, Param, Post, Redirect } from '@nestjs/common';

@Controller('routing')
export class RoutingController {
  
  @All('all')
  handleAllRequests() {
    return 'This route handles all http methods (GET,POST,PUT,DELETE)'
  }

  @Post('httpcode')
  @HttpCode(200)
  customHttpCode() {
    return 'This response has HTTP Code 200'
  }

  @Get('redirect')
  @Redirect('https://nestjs.com',302)
  redirectExample() {
    return {url: 'https://docs.nestjs.com', statusCode: 301}
  }

  @Get('header')
  @Header('Custom-Header','NestJs-Demo')
  headerExample() {
    console.log("Header route")
    return 'Custom header added!'
  }

  @Get('user/:id')
  getUserById(@Param('id') id: string) {
    return `User Id is: ${id}`
  }

  @Get('primes/:start/:end')
  getPrimes(@Param('start') start: string,@Param('end') end: string) {
    const s = parseInt(start)
    const e = parseInt(end)
    const primes: number[] = []

    for (let i=s;i<=e;i++) {
      if (this.isPrime(i)) {
        primes.push(i)
      }
    }

    return {start: s,end: e,primes}
  }

  private isPrime(num: number) : boolean {
    if (num < 2) return false
    for (let i=2;i<=Math.sqrt(num);i++) {
      if (num%i==0) return false
    }
    return true
  }

  @Get('page/:pageNo')
  getPagination(@Param('pageNo') pageNo: string) {
    const page = parseInt(pageNo)
    const limit = 5

    const start = (page - 1) * limit + 1
    const end = page * limit

    return {page,startRecord: start,endRecord: end}
  }

  @Get('wildcard/*')
  wildcardRoute() {
    return 'This route uses wildcard *'
  }
} 