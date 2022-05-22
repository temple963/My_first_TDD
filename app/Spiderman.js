class Spiderman{

    constructor(name,age,actor,movies,studio){
        this.name=name
        this.age=age
        this.actor=actor
        this.movies=movies
        this.studio=studio
    }
       // aqui se agrega el metodo get info como se espera recibir un string requiere utilizar return con interpolacion entre las comillas ``
       getInfo(){
        return `Hey, Im ${this.actor} from ${this.studio} studios`
      }

}


module.exports =Spiderman