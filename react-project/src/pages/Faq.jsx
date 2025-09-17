import React from 'react'
import blog1 from "../assets/images/blog_img1.png";
import blog2 from "../assets/images/blog_img2.png";

function Faq() {
  return (
    <>
    <div className="container faq my-2">
        <h1>Menswear Maven: Fashion Finds for Every Occasion</h1>
        <br />
        <br />
        <center>
          <img src={blog1} alt="" width="100%" />
        </center>
        <p className="para" >
          What makes a purchase “worth it”? The answer is different for
          everybody, so we’re asking some of the coolest, most shopping-savvy
          people we know—from small-business owners to designers, artists, and
          actors—to tell us the story behind one of their most prized
          possessions.
        </p>
        <div className="para" 
        >
          <h3 style={{ color: "black" }}>Who?</h3>
          Phoebe Sung and Peter Buer met and fell in love as fashion school
          students in mid-aughts Boston. After they graduated, the couple began
          to craft together as a way to decompress from their corporate fashion
          jobs. They made jewelry, then bags, then home goods like wall
          hangings, which were ultimately the gateway to launching their
          now-beloved New York–based textile brand Cold Picnic.
          <br />
          <br />
          <center>
            <img src={blog2} alt="" id='blog2' />
          </center>
          <p style={{ fontSize: "medium",color:"black" }}>
            Phoebe and Peter in their Ridgewood home
          </p>
          <p style={{ fontSize: "large", color: "gray" }}>
            Since 2010, Phoebe and Peter have been designing colorful, abstract
            rugs and bath mats that double as works of art. Nearly every
            collection is informed by old movies, either in composition (they
            print out stills and trace shapes over them) or palette (think retro
            hues). “There was one series of films that we were really inspired
            by that were all set in the desert, so the colors were very chalky
            and powdery but still saturated,” Phoebe shares. “We still use a lot
            of peaches and mints and citrons and tans.”
          </p>
          <br />
          <p>
            <h3 style={{ color: "black" }}>What?</h3>
            The couple’s 1910s Ridgewood, Queens, home is filled with their own
            creations, including a HAY sofa (the Mags Soft Low sectional to be
            exact) that they reupholstered using hand-tufted rugs after the
            sofa’s original pink tweed got ruined. “We were trying to think of
            what kind of upholstery we could actually live with and the rugs are
            pretty durable,” Phoebe says. “We thought that something a little
            bit heartier with a lot of color and design would survive our
            family.” For the sofa’s seat and back cushions, Phoebe and Peter
            chose designs from their Beau Travail collections, which are an
            homage to the Claire Denis film of the same name. But instead of
            using the handmade, high-low pile wool rugs that are sold on the
            Cold Picnic website, Peter tufted the rugs himself—twice. “He bought
            a frame and a gun and he watched all these videos, but we used the
            wrong glue backing, so it was too stiff and he had to do it all over
            again,” Phoebe laments.
          </p>
          <br />
          <p>
            <h3 style={{ color: "black" }}>Where and When?</h3>
            Peter undertook this grueling project at home in 2021—injuring his
            back in the process. “Everything he does, he does very intensely. He
            just wanted to finish it, but then he put his back out and couldn’t
            walk or get out of bed for a week after. He paid for it, but it was
            worth it,” Phoebe says, adding that a local upholsterer then covered
            the HAY sofa in the hand-tufted rugs and a greenish-mustard wide
            wale corduroy.
          </p>
          <br />
          <p>
            <h3 style={{ color: "black" }}>Why? </h3>
            In addition to being durable and stylish, the one of a kind
            sectional holds lots of sentimental value for the couple. “I
            actually had a mustard corduroy sofa growing up, so it’s nostalgic,
            but it is our take on it,” Phoebe explains. “And that’s how we think
            about designing. That’s why we always use old movies and these ’70s
            powdery palettes. It’s exactly our personal style, which is hard to
            encapsulate.” Phoebe and Peter paired their special sofa with one of
            the rugs that’s featured in the design, the Denis Denis, , as well
            as a vintage coffee table, a Noguchi-style pendant, and a
            papier-mâché tulip lamp they made during the pandemic. “We thought
            using one of the rugs that it was based on would be too much, so we
            made a brown rug to go with it, but actually that was too much,”
            Phoebe says. “The effect was more low-key when we just really went
            for it and did the whole room in the same print.”
          </p>
        </div>
      </div>
    
    </>
  )
}

export default Faq