<script>
    import hljs from 'highlight.js/lib/core';
    import {onMount} from 'svelte'
    import xml from 'highlight.js/lib/languages/xml'
    import 'highlight.js/styles/atom-one-dark-reasonable.css';
    import CopyIcon from './CopyIcon.svelte'
    import {Beautify} from './Beautify.js'
    hljs.registerLanguage('xml', xml);
    let b_str=""

    export let str = ""
    let empty = true

    $: if (str!=""){empty=false}else{empty=true}

    $: if(mounted) {
        b_str = Beautify(str)
    }

    let mounted = false

    onMount(()=>{
        b_str = Beautify(str)
        mounted = true
    })
    let pre = null
    let but = null
    let copied = false
    function SetPre(n){
        pre = n
    }
    function SetBut(n){
        but = n
    }
    function copyFunction() {
        const copyText = pre.textContent;
        const textArea = document.createElement('textarea');
        textArea.textContent = copyText;
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove()
        copied =true
        setTimeout(()=>copied=false,5000)
    }
</script>

<div class="px-2 pb-24 relative">
    <div class="bg-gray-800 p-6 rounded overflow-auto max-h-full">
        <div class="absolute justify-center items-center right-0 flex mr-10">
            <div class="absolute {copied? 'z-10':''} {copied? '':'opacity-0'} transform duration-1000  {copied? '-translate-y-6':''} text-blue-300 font-semibold text-sm">Copied!</div>
            <div class="{copied? '':'z-10'} {empty? 'hidden':''} {copied? '':'cursor-pointer'}" on:click="{()=>copyFunction()}" use:SetBut>  <CopyIcon {copied}/></div>
        </div>
        <pre class="">
        <code class="bg-gray-800 text-white" use:SetPre>{@html hljs.highlight('xml', b_str).value}</code>
    </pre>
    </div>
</div>