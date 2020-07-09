# Docker And Traefik

Docker with Traefik hosting nginx, jenkins, gitlocal.

The code in this repository is based on the
[Traefik: Keep the Routing Simple by Damien Duportal, Developer Advocate of Containous](https://www.youtube.com/watch?v=UEB0SFaCpUY)
video.

      - traefik.http.routers.gitlocal.rule=(Host(`renderws`) && PathPrefix(`/gitea`))
      - traefik.http.routers.gitlocal.middlewares=gitlocal-stripprefix
      - "traefik.http.middlewares.gitlocal-stripprefix.stripprefix.prefixes=/gitea"
