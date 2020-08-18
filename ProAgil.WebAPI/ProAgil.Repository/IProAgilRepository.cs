using ProAgil.Domain;
using System.Threading.Tasks;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        //GERAL
         void Add<T>(T entity) where T : class;    

         void Update<T>(T entity) where T : class;  

         void Delete<T>(T entity) where T : class; 

         Task<bool> SaveChangesAsync();

         //EVENTOS
         Task<Evento[]> GetAllEventoAsyncByTema(string tema, bool includePalestrantes);

         Task<Evento[]> GetAllEventoAsync(bool includePalestrantes);

         Task<Evento> GetAllEventoAsyncById(int EventoId,bool includePalestrantes);

        //PALESTRANTE
         Task<Palestrante[]> GetAllPalestrantesAsyncByName(string name, bool includeEventos);

         Task<Palestrante> GetPalestranteAsync(int palestranteId,bool includeEventos);


    }
}