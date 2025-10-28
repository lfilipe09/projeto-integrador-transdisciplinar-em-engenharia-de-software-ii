Nome: Ana Souza
Data do teste: 2025-10-28

O que testou e funcionou:
- Abertura da aplicação e endpoint GET /health respondendo 200
- Endpoints /api/hello e /api/health funcionam

O que testou e não funcionou – O que deve ser corrigido:
- Saúde do serviço não mostrava claramente o status do banco de dados. Solicito incluir no /health o status de conexão do DB.

Funcionalidade não testada (faltou ou não foi implementada):
- CRUD completo de notas (apenas listagem/criação estão no escopo atual)
