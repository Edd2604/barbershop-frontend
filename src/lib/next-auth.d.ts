import 'next-auth/jwt'

declare module 'next-auth/jwt' {
  export interface JWT {
    user: {
      id: number
      role: string
      roleId: number
      email: string
      name: string
    }
    backendTokens: {
      accessToken: string
      refreshToken: string
    }
  }
}

declare module 'next-auth' {
  export interface Session {
    user: {
      id: number
      role: string
      roleId: number
      email: string
      name: string
    }
    backendTokens: {
      accessToken: string
      refreshToken: string
    }
  }
}
