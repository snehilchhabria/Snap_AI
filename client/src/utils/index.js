import { surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex];

    // to check that no two/three consecutive prompts we get are same
    if(randomPrompt === prompt) return  getRandomPrompt(prompt);

    return randomPrompt;
}