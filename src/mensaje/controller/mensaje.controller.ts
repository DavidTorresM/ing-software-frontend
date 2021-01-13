import {
    Body,
    Controller,
    Get,
    Param,
    Post,
  } from '@nestjs/common'
  
  import { Mensaje } from '../mensaje.entity';
  import { MensajeDTO } from '../interface/mensaje.interface';
  import { MensajeService } from '../service/mensaje.service';
  
  @Controller('api/mensaje')
  export class MensajeController {
    constructor(
      private servicioMensaje: MensajeService,
     ) {}
  
    @Post('crear')
    async crearMensaje(@Body() mensajeDTO: MensajeDTO): Promise< Mensaje > {
      const respuesta = await this.servicioMensaje.crear(mensajeDTO);
      
      return respuesta;
    }
    
    @Get('listar/:id')
    async obtenerMensaje(@Param('id') id: number): Promise< Mensaje[] | null >{
      const respuesta = await this.servicioMensaje.obtenerMensaje(id);
  
      return respuesta;
    }
  
    @Get('listar')
    async obtenerMensajees() : Promise< Mensaje[] > {
      const respuesta = await this.servicioMensaje.obtenerMensajes();
  
      return respuesta;
    }
  }
  