const know_btn = document.getElementById("know-btn");
const confirm_btn = document.getElementById("confirm-btn");
const inputs = document.querySelectorAll("input");
const output_screen = document.getElementById("output-screen");
const confirmation_dialogue = document.getElementById("confirmation-dialogue");

const anyInputsChecked = () => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      return true;
    }
  }
  return false;
};

know_btn.onclick = () => {
  if (anyInputsChecked()) {
    let modalContent = `
    The hobbies you wish to check are:
    <ul>
    `;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        modalContent += `<li> ${inputs[i].nextElementSibling.innerHTML} </li>`;
      }
    }
    modalContent += `</ul>`;

    confirmation_dialogue.innerHTML = modalContent;
  } else {
    confirmation_dialogue.innerHTML = `You have not selected any hobbies!`;
  }
};

confirm_btn.onclick = () => {
  if (anyInputsChecked()) {
    let output = `
    <div class="section-title">
        <h2>More Details</h2>
        <p>
          Here are more details about the hobbies you've selected for your reading
          pleasure.
        </p>
    </div>

    <div data-aos="fade-up">
  `;

    if (inputs[0].checked) {
      output += `
      <h3>Cardistry</h3>
      <p>
        Cardistry can best be described as "the performance art of card flourishing",
        and it's what happens when you manipulate a deck of playing cards to create a
        visually pleasing display by cuts, pivots, spins, twirls, and other moves.
        <br />
        My interest in cardistry sparked from watching the movie
        <em>Now You See Me</em>!
      </p>
      `;
    }

    if (inputs[1].checked) {
      output += `
      <h3>Cryptography</h3>
      <p>
        Cryptography is the practice and study of techniques for secure communication
        in the presence of adversarial behavior. More generally, cryptography is about
        constructing and analyzing protocols that prevent third parties or the public
        from reading private messages; various aspects of information security such as
        data confidentiality, data integrity, authentication, and non-repudiation are
        central to modern cryptography. Modern cryptography exists at the intersection
        of the disciplines of mathematics, computer science, electrical engineering,
        communication science, and physics. Applications of cryptography include
        electronic commerce, chip-based payment cards, digital currencies, computer
        passwords, and military communications. <br />
        I absolutely love cracking encryption schemes and analysing the security of
        cryptographic protocols in pursuit of potentially breaking them!
      </p>
      `;
    }

    if (inputs[2].checked) {
      output += `
      <h3>Fiction</h3>
      <p>
        Fiction is any creative work, chiefly any narrative work, portraying
        individuals, events, or places in ways that are imaginary or inconsistent with
        history, fact, or plausibility. <br />
        I like reading fictional novels, watching movies, playing video games with a
        fictional narrative, and the likes. It gives me a convenient escape from
        reality and often expands my creativity.
      </p>
      `;
    }

    if (inputs[3].checked) {
      output += `
      <h3>Guitar</h3>
      <p>
        The guitar is a fretted musical instrument that typically has six strings. It
        is usually held flat against the player's body and played by strumming or
        plucking the strings with the dominant hand, while simultaneously pressing
        selected strings against frets with the fingers of the opposite hand. A
        plectrum or individual finger picks may also be used to strike the strings.
        The sound of the guitar is projected either acoustically, by means of a
        resonant chamber on the instrument, or amplified by an electronic pickup and
        an amplifier. <br />
        I play both the acoustic and the electric guitar. They give a soothing
        experience in the middle of a hectic day and there's always a song to jam to
        for any situation.
      </p>
      `;
    }

    if (inputs[4].checked) {
      output += `
      <h3>Piano</h3>
      <p>
        The piano is a stringed keyboard instrument in which the strings are struck by
        wooden hammers that are coated with a softer material (modern hammers are
        covered with dense wool felt; some early pianos used leather). It is played
        using a keyboard, which is a row of keys (small levers) that the performer
        presses down or strikes with the fingers and thumbs of both hands to cause the
        hammers to strike the strings. <br />
        The piano feels home to me at my worst times. If there's one thing that has
        seen my reds and my blues in all their extremes, it'd be the piano.
      </p>
      `;
    }

    if (inputs[5].checked) {
      output += `
      <h3>Sketching</h3>
      <p>
        A sketch is a rapidly executed freehand drawing that is not usually intended
        as a finished work. <br />
        I often do sketching at times to work on something very different than my
        usual field of work.
      </p>
      `;
    }

    output += `
    </div>
    `;

    output_screen.innerHTML = output;
  } else {
    output_screen.innerHTML = ``;
  }
};
