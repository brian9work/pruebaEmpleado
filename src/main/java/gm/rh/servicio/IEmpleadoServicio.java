package gm.rh.servicio;

import gm.rh.modelo.Empleado;

import java.util.List;

public interface IEmpleadoServicio {
    public List<Empleado> lisEmpleados();
    public Empleado buscarEmpleadoPorID(Integer idEmpleado);
    public Empleado guardarEmpleado(Empleado empleado);
    public void eliminarEmpleado(Empleado empleado);
}
