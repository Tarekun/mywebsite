import { Typography } from "@mui/material";

const face = `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@...               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@..                          ..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.                                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@.                                           @@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@..                                               .@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@.                                                    .@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@..                                                        @@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@.                                                             @@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@.                                                               @@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@+                                                                  .@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@          .*= .                                                      .@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@.      .@@@@@@@@@@.                                           .         @@@@@@@@@@@@@@
@@@@@@@@@@@@@..    .@@@.       +@@.                                  #@@@@@@@@@.       @@@@@@@@@@@@@
@@@@@@@@@@@@.     :@@  -@   .%:. @@                                .@@.      ..@@:      @@@@@@@@@@@@
@@@@@@@@@@@@     .@% .@.       @ .@@                              .@@ .@.   .@. .@@     -@@@@@@@@@@@
@@@@@@@@@@@      @@. @.        @  *@.                            .@@. @       -. .@@     @@@@@@@@@@@
@@@@@@@@@@.      @@  @         %. .@.                            @@  +.        %. .@.     @@@@@@@@@@
@@@@@@@@@@.      @@  @         @  %@.                            @@  @.         *  @=     @@@@@@@@@@
@@@@@@@@@@.      @@. ...     .@. .@@                             @@  .-         -  @-     .@@@@@@@@@
@@@@@@@@@.       .@@. .@.   @+. =@%.                             .@@  +.       @  @@.      @@@@@@@@@
@@@@@@@@@      .@. @@@        @@@.                                 @@  .@.   .@  .@@       @@@@@@@@@
@@@@@@@@@     .@@@  .@@@@@@@@@:.              @@.    -@@.           @@@.  .  ...@@*        @@@@@@@@@
@@@@@@@@@               . .                  @@@@    @@@:             .@@@@@@@@@*. .@@.    @@@@@@@@@
@@@@@@@@@                                    .@@.    .@+                     .     .@@.    @@@@@@@@@
@@@@@@@@@                                                                                  @@@@@@@@@
@@@@@@@@@                                                                                  @@@@@@@@@
@@@@@@@@@#    .@                                                                          .@@@@@@@@@
@@@@@@@@@@     @@                                                                   @@    @@@@@@@@@@
@@@@@@@@@@.     @@.                       .-=++++=. .                              @@    .@@@@@@@@@@
@@@@@@@@@@@      -@.       ..@@@@@@@@@@@@@@@.@@@ @@@..@@@@@@@@@@@@:.              @@     @@@@@@@@@@@
@@@@@@@@@@@*      .@@  .@@@@@@@@:.@..@@  @@  .@   @.  -@   @.. @..@@.@@@@       .@..     @@@@@@@@@@@
@@@@@@@@@@@@.       @@@@@@@@@  @  @   .  .-   #   @.   .   @   @  @. .#.=@@@%.@@@..     @@@@@@@@@@@@
@@@@@@@@@@@@@         @@@@@@@  @  @   .   -  .#   @    .   @   @  %  .: .@@@@@@.      .@@@@@@@@@@@@@
@@@@@@@@@@@@@@.        .@@@@@.@..@*#@@%@@+@@..@@.#@%.@@#%@@@@@@@@@@@%%@.%@@@@..      .@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@          .@@@.@  @  @  @   @  -   @   =  @   @  @  @  @ @@@.         @@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@.           .@@@@@..@. @- .@  @  .@  .@  @. .@  @. @@@@@.          .@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@             .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.            +@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@.                .=@@@@@@@@@@@@@@@@@@@@@@@@@@@..             .@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@.                            .. .                        .@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@                                                      @@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@.                                                .@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                            .@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.                                     =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+                             ..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 .. @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`;

export default function Emil() {
  return (
    <Typography
      sx={{ whiteSpace: "pre-wrap", color: "primary.main" }}
      fontSize={6}
    >
      {face}
    </Typography>
  );
}
