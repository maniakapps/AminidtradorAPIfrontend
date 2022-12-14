# API Manager summary
This is a project built using **React**

This application manages a REST API, powered by **Axios** to make the requests
It was built to work with this specific data.

``` sql
CREATE TABLE IF NOT EXISTS public.api_company
(
id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
name character varying(200) COLLATE pg_catalog."default" NOT NULL,
website character varying(200) COLLATE pg_catalog."default" NOT NULL,
foundation integer NOT NULL,
created_at timestamp with time zone NOT NULL,
CONSTRAINT api_company_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.api_company
OWNER to postgres;
```
and has the following data preview

<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">ID</th>
    <th class="tg-0pky">Name</th>
    <th class="tg-0pky">Website</th>
    <th class="tg-0pky">Foundation</th>
    <th class="tg-0pky">Created at</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">1</td>
    <td class="tg-0pky">Samsung</td>
    <td class="tg-0pky"><a href="https://www.samsung.com/us/"><span style="color:#c6c3a8">https://www.samsung.com/us/</span></a></td>
    <td class="tg-0pky">1938</td>
    <td class="tg-0pky">09/07/2022</td>
  </tr>
  <tr>
    <td class="tg-0pky">2</td>
    <td class="tg-0pky">Maniak Apps</td>
    <td class="tg-0pky"><a href="https://maniakapps.com/"><span style="color:#c6c3a8">https://maniakapps.com/</span></a></td>
    <td class="tg-0pky">2019</td>
    <td class="tg-0pky">09/07/2022</td>
  </tr>
  <tr>
    <td class="tg-0pky">3</td>
    <td class="tg-0pky">Google</td>
    <td class="tg-0pky"><a href="https://www.google.com/"><span style="color:#c6c3a8">https://www.google.com/</span></a></td>
    <td class="tg-0pky">1998</td>
    <td class="tg-0pky">09/07/2022</td>
  </tr>
</tbody>
</table>

The login uses a token based authentication.

By Manuel Pizano.
