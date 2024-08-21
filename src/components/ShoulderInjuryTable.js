import React, { useEffect } from 'react';
import './ShoulderInjuryTable.css';

const ShoulderInjuryTable = () => {
  useEffect(() => {
    const table = document.getElementById('injuryTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.getElementsByTagName('td');
      
      const button = document.createElement('button');
      button.className = 'collapse-btn';
      button.textContent = cells[0].textContent;
      
      const content = document.createElement('div');
      content.className = 'content';
      
      for (let j = 1; j < cells.length; j++) {
        const heading = document.createElement('h3');
        heading.textContent = table.rows[0].cells[j].textContent;
        content.appendChild(heading);
        content.appendChild(cells[j].cloneNode(true));
      }

      const container = document.createElement('div');
      container.appendChild(button);
      container.appendChild(content);

      row.innerHTML = '';
      row.appendChild(container);

      button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>Shoulder Injury Findings</h1>
      <table id="injuryTable">
        <thead>
          <tr>
            <th>Finding</th>
            <th>Medical Explanation</th>
            <th>Significance and Why</th>
            <th>Lay Explanation</th>
            <th>Notable Notes</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}
          {/* Example row: */}
          <tr>
          <td data-label="Finding">Small acute <strong>Hill-Sachs defect</strong></td>
                <td data-label="Medical Explanation">Compression fracture on the posterolateral aspect of the <strong>humeral head</strong></td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Indicates anterior shoulder dislocation</li>
                        <li>Can contribute to recurrent instability</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">Imagine the top of your arm bone (<strong>humerus</strong>) as a ball that fits into the shoulder socket. When the shoulder dislocated, this ball was pushed against the edge of the socket, causing a small <strong>dent</strong>. This dent can make it easier for the shoulder to pop out again in the future, like a ball that doesn't sit quite right in its socket.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Size matters: larger defects increase instability risk</li>
                        <li>May need surgical repair if significant</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding">Possible small <strong>trabecular or hairline fracture</strong></td>
                <td data-label="Medical Explanation">Subtle linear band of <strong>edema</strong> extending into the central humeral head</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Additional injury from dislocation force</li>
                        <li>May complicate healing process</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">When the shoulder dislocated, it put a lot of stress on the arm bone. This stress might have caused a very tiny <strong>crack</strong> in the bone - so small that it's hard to see even on an MRI. It's like when you bend a plastic ruler too far - it might not break completely, but you might see a faint line where it was stressed. This tiny crack can cause pain and might take a bit longer to heal.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>May not require specific treatment</li>
                        <li>Could contribute to pain during healing</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding">Tear of anterior inferior <strong>labrum</strong> (<strong>Bankart lesion</strong>)</td>
                <td data-label="Medical Explanation">Detachment of the cartilage rim from the front-bottom part of the shoulder socket</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Major contributor to shoulder instability</li>
                        <li>Often requires surgical repair</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">Around the edge of your shoulder socket, there's a ring of tough tissue called the <strong>labrum</strong>. It's like a rubber seal that helps keep the ball of the arm bone in place. In John's case, this seal has <strong>torn away</strong> from the front-bottom part of the socket. This is a bit like if the rubber seal around your refrigerator door came loose - the door would be less stable and might not close properly. Similarly, this labrum tear makes it easier for the shoulder to slip out of place again.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Classic injury in young adults with dislocation</li>
                        <li>High recurrence rate without repair</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding">Suspected <strong>periosteal sleeve avulsion</strong></td>
                <td data-label="Medical Explanation">Stripping of the <strong>periosteum</strong> (bone covering) with attached labrum</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Can complicate labral repair</li>
                        <li>May require specific surgical technique</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">Bones have a thin, tough outer layer called the <strong>periosteum</strong>. In this injury, not only has the labrum (the shoulder socket's "rubber seal") torn, but it's <strong>pulled away</strong> some of this bone covering with it. It's a bit like when you peel an orange and some of the white pith comes away with the peel. This makes the injury a bit more complex to repair, as the surgeon needs to reattach both the labrum and this bone covering.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Can lead to poor healing if not addressed</li>
                        <li>May increase surgical complexity</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding"><strong>HAGL</strong> (<strong>Humeral Avulsion of Glenohumeral Ligament</strong>) deformity</td>
                <td data-label="Medical Explanation">Tearing of the main shoulder ligament from its attachment on the humerus</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Significant contributor to instability</li>
                        <li>Often requires surgical repair</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">Your shoulder has several strong <strong>ligaments</strong> that help hold it in place, like thick rubber bands. One of these important ligaments has been <strong>pulled off</strong> the arm bone. Imagine if one of the big rubber bands holding a tent in place came unhooked - the tent would become much less stable. Similarly, this detached ligament makes the shoulder much less stable and more likely to dislocate again.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Less common than Bankart lesions</li>
                        <li>Can be missed if not specifically looked for</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding">Moderate <strong>edema</strong> of proximal <strong>subscapularis</strong> and <strong>teres minor</strong> muscles</td>
                <td data-label="Medical Explanation">Swelling and fluid accumulation within these rotator cuff muscles</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Indicates trauma from dislocation</li>
                        <li>May prolong recovery time</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">When the shoulder dislocated, it strained some of the muscles that help control shoulder movement. These muscles have <strong>swollen up</strong> as a result, kind of like how your ankle might swell if you sprained it. This swelling can cause pain and stiffness, and it might take some time for these muscles to heal and function normally again.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Usually improves with time and rehabilitation</li>
                        <li>May require specific exercises in rehab</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding">Possible <strong>intrasubstance tears</strong> in subscapularis and teres minor</td>
                <td data-label="Medical Explanation">Potential partial tearing within the muscle fibers</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Could impact muscle function</li>
                        <li>May increase recovery time</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">In addition to being swollen, these shoulder muscles might have some <strong>small internal tears</strong>. It's a bit like if you slightly tore a piece of cloth - the cloth is still in one piece, but some of the internal fibers are damaged. These small tears can cause pain and weakness, and they'll need time to heal.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Often heal without surgery</li>
                        <li>May contribute to weakness initially</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding">Large <strong>joint effusion</strong></td>
                <td data-label="Medical Explanation">Accumulation of fluid within the shoulder joint space</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Expected after traumatic dislocation</li>
                        <li>Indicates acute inflammation</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">After the injury, the body has sent a lot of <strong>fluid</strong> to the shoulder joint. This is part of the body's natural healing process, but it causes <strong>swelling</strong> and can be uncomfortable. It's similar to how a sprained ankle swells up with fluid. This excess fluid can make the shoulder feel tight and painful, and it might limit movement for a while.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Usually resolves over time</li>
                        <li>May require drainage if excessive</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding">Intact <strong>rotator cuff tendons</strong> (<strong>Supraspinatus</strong>, <strong>Infraspinatus</strong>, <strong>Subscapularis</strong>)</td>
                <td data-label="Medical Explanation">No full-thickness tears in the main stabilizing tendons of the shoulder</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Positive finding</li>
                        <li>Better prognosis for shoulder function</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">The <strong>rotator cuff</strong> is a group of tendons that are crucial for shoulder movement and stability. Imagine them as thick cords that help control the shoulder joint. The good news is that these important tendons <strong>aren't torn</strong>. This is like finding out that while your car has been in an accident, the engine is still intact - it makes the overall repair process easier and improves the chances of a full recovery.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Simplifies treatment approach</li>
                        <li>Focus can be on labral and ligament repair</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-label="Finding">Intact <strong>biceps tendon</strong>, no subluxation</td>
                <td data-label="Medical Explanation">Long head of biceps tendon in normal position without tearing</td>
                <td data-label="Significance and Why">
                    <ul>
                        <li>Positive finding</li>
                        <li>One less structure to worry about in treatment</li>
                    </ul>
                </td>
                <td data-label="Lay Explanation">The <strong>biceps</strong> muscle in your upper arm has a long tendon that runs through the shoulder joint. In John's case, this tendon is still in its <strong>correct position</strong> and isn't torn. This is another piece of good news, as it means one less thing to worry about or repair. It's like if you dropped your phone and cracked the screen, but found out that the camera and all other functions still work perfectly - it simplifies the repair process.</td>
                <td data-label="Notable Notes">
                    <ul>
                        <li>Can be injured in some dislocations</li>
                        <li>Intact status is good for overall prognosis</li>
                    </ul>
                </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoulderInjuryTable;