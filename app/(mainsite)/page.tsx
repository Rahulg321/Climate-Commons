import Bounded from "@/components/Bounded";
import { ModeToggle } from "@/components/theme-button";
import React from "react";

const page = () => {
  return (
    <Bounded>
      <ModeToggle />
      page
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolores
        voluptatem omnis voluptas fugit vitae, facilis officia non odio
        mollitia? Sint dicta et sequi totam ipsa. Consectetur dolorem illo
        quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Minus dolores pariatur nisi repellendus nulla. Eligendi voluptate quis
        ex nostrum animi libero ratione possimus, sed aliquam eius, dolores
        ipsam unde iusto!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quisquam
        reprehenderit iure repellendus eaque recusandae obcaecati! Aperiam
        blanditiis quod, voluptatum harum autem odio, voluptatem adipisci soluta
        nihil velit nemo necessitatibus. Dolorum nostrum nam laudantium rerum
        est quo nemo sapiente amet atque itaque repudiandae sunt aliquam nihil
        nisi voluptates maiores ipsum dolorem nulla cumque a temporibus,
        mollitia fugit. Labore, fugit. Placeat. Consectetur, placeat sint.
        Dolores error est quo, quis inventore accusantium laudantium ratione,
        quia, unde nesciunt molestias illo blanditiis. Totam incidunt, fugiat
        dignissimos autem dolor cum. Illum neque odio quis quidem!
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </Bounded>
  );
};

export default page;
