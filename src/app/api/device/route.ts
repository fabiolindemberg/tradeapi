import { NextRequest, NextResponse } from 'next/server'
import apiAxios from '../../../utils/apiAxios'

export async function POST(request: NextRequest) {
    // Este método deve receber o token do dispositivo que se registrar para receber notificações e armazenar no banco de dados
    // request.body deve conter um json com o seguinte formato: {"token": "token string"}
}