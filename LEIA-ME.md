# TEX Orçamentos — app para celular e computador (PWA)

Plataforma de orçamento de obras da TEX Engenharia & Inovação, para publicar no GitHub Pages, do mesmo jeito que o Rumo 90.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app completo |
| `manifest.webmanifest` | Nome, ícone e cores para instalar |
| `sw.js` | Funcionamento sem internet |
| `icons/` | Ícones do app |
| `lib/` | Leitor de planilhas e gerador de PDF (funcionam sem internet) |

Envie tudo para a raiz do repositório, mantendo as pastas `icons` e `lib`.

## Publicar no GitHub Pages

1. Crie um repositório público, por exemplo `tex-orcamentos`.
2. **Add file › Upload files**: arraste todos os arquivos e as pastas `icons` e `lib`, e confirme em **Commit changes**.
3. **Settings › Pages**: *Deploy from a branch*, branch **main**, pasta **/ (root)**, **Save**.
4. Em um ou dois minutos o endereço aparece: `https://SEU-USUARIO.github.io/tex-orcamentos/`.

## Instalar

- **Computador (Chrome ou Edge):** abra o endereço e clique no ícone de instalar na barra de endereço.
- **Android (Chrome):** ⋮ › *Instalar app*.
- **iPhone (Safari):** Compartilhar › *Adicionar à Tela de Início*.

## Primeiros passos

1. **Ajustes:** dados da empresa, responsável técnico, CREA e assinatura.
2. **Bases de preços › Importar:** baixe a SINAPI do mês no site da Caixa (formato Excel) e importe o arquivo `SINAPI_Referência_AAAA_MM.xlsx`, UF **SC**.
3. **BDI e encargos:** confira as parcelas do BDI e a tabela de encargos.
4. **Orçamentos:** crie um novo, busque os serviços em cada etapa ou use *Funções inteligentes › Montar por descrição*.

## Onde ficam os dados

Tudo fica no aparelho (no navegador). Use **Ajustes › Fazer backup** com frequência; o arquivo de backup leva os dados para outro aparelho. Cada aparelho tem os seus dados até ligarmos a versão em nuvem com login da equipe.

## Atualizar

Substitua `index.html` e `sw.js` no repositório. Se continuar a versão antiga, feche e abra o app duas vezes. Os dados não se perdem.
